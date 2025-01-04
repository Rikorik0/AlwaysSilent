# AlwaysSilent
Always silent your messages (@silent)

(Vencord custom plugin)

# Install Guide
Follow the vencord install guide [here](https://docs.vencord.dev/installing/)

[for the complicated custom plugin installation guide](https://docs.vencord.dev/installing/custom-plugins/#_top) *(recommended)*

**Make sure your to read warnings before injecting custom plguins**

## Injecting custom plugin

*You can skip this custom plugin installation guide ~~it's better to read installation guide from above~~*

Place the unzipped plugin inside the userplugins folder (vencord/src/userplugins) if you don't have the folder, you will be need to make it yourself

Then, build your vencord (From downloaded Vencord path)

```shell
pnpm build
```

Inject your vencord, and plugins to your client

```shell
pnpm inject
```

# Finish

Now, enable `AlwaysSilent` plugin in plugin settings
