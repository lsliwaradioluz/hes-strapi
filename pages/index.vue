<template>
  <div>
    <LandingPage :background="background" />
    <Memberships :memberships="memberships" />
    <Zones :zones="zones" />
    <Facilities :facilities="facilities" />
    <Info :infos="infos" />
  </div>
</template>

<script>
  import LandingPage from '~/components/main/LandingPage.vue'
  import Memberships from '~/components/main/Memberships.vue'
  import Zones from '~/components/main/Zones.vue'
  import Facilities from '~/components/main/Facilities.vue'
  import Info from '~/components/main/Info.vue'

  import mainQuery from '~/apollo/queries/main/mainQuery.gql'
  
  export default {
    components: {
      LandingPage,
      Memberships, 
      Zones, 
      Facilities, 
      Info
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: mainQuery })
        .then(({ data }) => {
          return {
            background: data.background, 
            memberships: data.memberships,
            zones: data.zones, 
            facilities: data.facilities, 
            infos: data.infos
          }
        });
    },
  }
</script>
