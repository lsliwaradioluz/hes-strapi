<template>
  <div>
    <Landing :infos="infos" />
    <About :facilities="facilities" />
    <Zones :zones="zones" />
    <Memberships :memberships="memberships" />
  </div>
</template>

<script>
  import Landing from '~/components/main/Landing.vue'
  import About from '~/components/main/About.vue'
  import Memberships from '~/components/main/Memberships.vue'
  import Zones from '~/components/main/Zones.vue'
  import Facilities from '~/components/main/Facilities.vue'

  import mainQuery from '~/apollo/queries/main/main.gql'
  
  export default {
    components: {
      Landing,
      About,
      Memberships, 
      Zones, 
      Facilities,
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: mainQuery })
        .then(({ data }) => {
          return {
            memberships: data.memberships,
            zones: data.zones, 
            facilities: data.facilities, 
            infos: data.infos
          }
        });
    },
  }
</script>
