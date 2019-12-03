<template>
  <client-only>
    <div>
      <LandingPage :backgrounds="backgrounds" v-if="backgrounds" />
      <Memberships :memberships="memberships" v-if="memberships" />
      <Zones :zones="zones" v-if="zones" />
      <Facilities :facilities="facilities" v-if="facilities" />
    </div>
  </client-only>
</template>

<script>
  import LandingPage from '~/components/main/LandingPage.vue'
  import Memberships from '~/components/main/Memberships.vue'
  import Zones from '~/components/main/Zones.vue'
  import Facilities from '~/components/main/Facilities.vue'

  import backgroundsQuery from '~/apollo/queries/backgrounds/backgrounds.gql'
  import membershipsQuery from '~/apollo/queries/memberships.gql'
  import zonesQuery from '~/apollo/queries/zones.gql'
  import facilitiesQuery from '~/apollo/queries/facilities.gql'
  
  export default {
    components: {
      LandingPage,
      Memberships, 
      Zones, 
      Facilities, 
    },
    apollo: {
      memberships: {
        prefetch: true, 
        query: membershipsQuery
      },
      zones: {
        prefetch: true, 
        query: zonesQuery
      },
      facilities: {
        prefetch: true, 
        query: facilitiesQuery
      },
      backgrounds: {
        prefetch: true, 
        query: backgroundsQuery
      },
    }
  }
</script>
