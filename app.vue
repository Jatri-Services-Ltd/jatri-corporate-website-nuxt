<template>
  <div v-if="loading" class='fixed inset-0 bg-white z-50 overflow-hidden' style='background: #e4e4e4bd'>
    <div class='flex flex-col justify-center items-center h-screen'>
      <div class=loader-container>
        <img src="/loader-icon.png" alt="loader" id="breathing-button"/>
        <div class="loader"></div>
        <h5 class='loading-text'>Please wait...</h5>
      </div>
    </div>
  </div>

  <NuxtLayout>
    <NuxtLoadingIndicator/>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { provide } from 'vue';

const isDarkMode = ref(false);
provide('darkMode', isDarkMode);

const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});

useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-2WJGXESERR',
      async: true,
    },
    {
      innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-2WJGXESERR');
      `,
      type: 'text/javascript',
    },
    {
      innerHTML: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '520385422244976');
      fbq('track', 'PageView');
      `,
      type: 'text/javascript',
    },
  ],
  noscript: [{
    innerHTML: `<img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=520385422244976&ev=PageView&noscript=1"
  />`
  }]
});
</script>

<style scoped>
.loader {
  /* border: 8px solid #f3f3f3; */
  border-radius: 50%;
  border-top: 4px solid #f04935;
  width: 100px;
  height: 100px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader-container {
  position: absolute;
  left: 50%;
  top: 50%;
  display: block;
  transform: translate(-50%, -50%);
}

.loader-container img {
  position: absolute;
  left: 23%;
  top: 18%;
  width: 55px;
  height: 55px;
}

.loading-text {
  font-size: 21px;
  margin-top: 10px;
  color: #232323;
  font-family: sans-serif;
}

#breathing-button {
  animation: breathing 1s ease-out infinite normal;
  -webkit-font-smoothing: antialiased;
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  50% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1.1);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
}
</style>