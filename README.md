<h1 align="center">NMTY</h1>

- Made using [Nuxt](https://nuxt.com) & [Directus](https://directus.io)
- Deploy over Cloudflare Global Network

## 🔧 Deployement
1. Deploy frontend using cloudflare pages ([see this](https://nitro.unjs.io/deploy/providers/cloudflare))
2. Deploy a Directus instance (self-hosted or directus cloud)
3. Change the directus url in `nuxt.config.ts`
4. Create the collections

**Collection name: `landing_page` *SINGLETON ⚠️* <br>**
*Fields:*
name | type | required
---|---|---
title | input | yes
sub_title | textarea | yes

**Collection name: `legal` *SINGLETON ⚠️* <br>**
Don't forget to select the optional field `date_updated` <br>
*Fields:*
name | type | required
---|---|---
title | input | yes
content | WYSISYG | yes

**Collection name: `team` <br>**
*Fields:*
name | type | required
---|---|---
name | input | yes
avatar | image | no
role | input | yes

5. Set the permissions <br>

In directus, navigate to Settings > Access Control > Public. <br>
Here we allow users to see all our collections.
![image](https://i.imgur.com/ZAwaHUU.png)
You're all done!
