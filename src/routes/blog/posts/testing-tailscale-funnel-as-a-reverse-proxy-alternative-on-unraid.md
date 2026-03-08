---
title: 'Testing Tailscale Funnel as a Reverse Proxy Alternative on Unraid'
date: '2026-03-08'
---

## Overview

I self-host most of my applications on Unraid, and Tailscale has been one of the easiest wins in that setup.

The Unraid plugin makes it easy to get the host onto my tailnet, but the experience gets less polished once the containers are not created through Unraid itself. If I spin something up manually, through Docker Compose, or through Portainer, I do not get the same low-effort path to exposing it through Tailscale.

So this was the problem I wanted to solve today: get a cleaner Tailscale workflow for non-Unraid containers, then see whether Tailscale Funnel could also be a realistic alternative to reverse proxying some of my public web UIs.

## Main Decision

The first thing I looked at was how people were handling this problem already.

`tsdproxy` was interesting because it showed that this kind of workflow could work. To me, it felt more like a one-person proof of concept than some hardened community default. It solved a real problem, but with the project sitting quiet for a while, I did not really want to build new habits around it.

So I went looking for a more active project and ended up at [Docktail](https://github.com/marvinvr/docktail).

Docktail looked close to what I wanted: label-driven service exposure, less per-container glue, and a setup that could stay boring once it was working.

## Main Gotcha

The first thing that stood out in Docktail's README was the tagged node requirement.

For service auto-approval, the Tailscale node advertising the services needs to have a tag that matches the `autoApprovers` configuration in the tailnet ACL policy. That part makes sense. The awkward bit was figuring out where that should live in an Unraid setup.

I could probably have made it work by running something like this directly on the host:

```bash
tailscale up --advertise-tags=tag:server --reset
```

But I did not like that approach much. Even if I wrapped it in a boot script, it still felt like the sort of host-level tweak I would forget about later.

So instead of depending on the host-level Tailscale instance to advertise the tags, I ran another Tailscale instance as a container on the same Unraid machine.

That gave me a cleaner split of responsibilities:

1. Unraid keeps its normal Tailscale integration.
2. The extra Tailscale container handles the tagged identity.
3. Docktail talks to that tagged Tailscale instance.

That was the main technical decision of the day, and it ended up being the right one for me.

## Result

Once that tagged sidecar was in place, the setup started feeling much more predictable.

I could add labels to however many containers I wanted and have them show up on the tailnet without turning each app into its own networking project. That is basically the experience I wanted from the beginning for containers that Unraid did not create for me.

## Funnel Notes

While I was already working on this, I also noticed that Docktail supports Tailscale Funnel. That sent me into a second experiment: expose one of my web UIs publicly and see whether Funnel could be an alternative to my usual reverse proxy setup.

For quick exposure, Funnel is genuinely nice. If the Tailscale pieces are already in place, getting a public URL does not feel like a whole project. That makes it attractive for testing, temporary access, or sharing something before deciding whether it deserves a more permanent setup.

The limitations showed up pretty quickly, though.

Funnel uses the machine hostname, not the service name, for the public URL. It is also limited to ports `443`, `8443`, and `10000`. On top of that, Tailscale documents Funnel as beta and notes that it has non-configurable bandwidth limits.

None of that makes Funnel bad. It just gives it a very specific shape.

For me, that shape feels more like a convenience publishing layer than a full replacement for a conventional reverse proxy. If I want to expose a web UI quickly, Funnel is great. If I want stable long-term public services, especially several of them on one machine, I still think reverse proxying is the cleaner fit.

The one Tailscale-centric pattern I still like for longer-term public exposure is giving each public app its own Tailscale sidecar. That way each app gets its own machine identity and a cleaner URL, something more like:

```text
https://funnelapp.mytailnet.ts.net
```

That feels much more intentional than trying to make a single machine hostname represent every public service on a box.

## Takeaway

The bigger win for me today was not Funnel itself. It was getting a cleaner Tailscale story for containers that Unraid did not create for me.

Docktail looks promising for that, especially once I stopped trying to force the host instance to do everything and instead gave it a tagged Tailscale sidecar to work with.

Funnel was still a useful discovery, just not as a blanket replacement for reverse proxying. My rule of thumb for now is pretty simple: use Docktail and Tailscale services for easy tailnet access, use Funnel for fast public exposure, and keep reverse proxies for the more permanent public-facing parts of the homelab.
