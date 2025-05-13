# Sharing Middleware, Routers & Procedures

Sharing TRPC middleware, routers & procedures can be achieved however, whatever
the project sets the context should satisfy the context used in all middleware,
routers & procedures

Here is an example project to showcase sharing components in TRPC

[https://github.com/nisala-ipsy/trpc-shareable-components](https://github.com/nisala-ipsy/trpc-shareable-components)

There is an example in TRPC project to showcase `Service Oriented Architecture`
as well.

[https://github.com/trpc/trpc/tree/main/examples/soa](https://github.com/trpc/trpc/tree/main/examples/soa)

This approach is almost similar to what's in `trpc-shareable-components` project
but context used in projects will be controlled by the `server-lib` not the individual
project owners.

Note that following warning messages are at the root of the example from TRPC

> [NOTE!] Not recommended unless you really need it; if you're not sure you need it, you definitely don't need it.
> All routers currently need to have the same Context, error formatters, etc

Context isolation doesn't seem to be available in TRPC yet and found [this issue](https://github.com/trpc/trpc/issues/5113) from 2024
I also found [this issue](https://github.com/trpc/trpc/issues/5113) in Github
