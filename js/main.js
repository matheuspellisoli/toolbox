Vue.component('listbox', { 
  props: ['site'],
    template: `
    <a class="subbox" :href="site.url" target=”_blank”>
        <div >
            <p class="subboxtitulo">{{site.titulo}}</p>
            <p class="subboxdesc">{{site.desc}}</p>
        </div>
    </a>
  `
});
  
  Vue.component('Box', { 
    props: ['data'],
      template: `
      <div class="row">
          <div class="box">
                  <div class="subtitulo label">
                        {{data.titulo}}
                  </div>
                  <div class="contedoBox">
                      <listbox 
                      v-for="site in data.sites" 
                      v-bind:site="site">
                       </listbox>
                  </div>
            </div>     
      </div>
    `
  });

  var app = new Vue({
    el: '#app',
    data: {
      hospedagem:{
        titulo:"Hospedagem",
        sites:[
          {
            titulo:"Pingdom Website Speed Test",
            url: "https://tools.pingdom.com/",
            desc: "Analisar velocidade e recursos que o site consome."
          }, 
          {
            titulo:"GTmetrix",
            url: "https://gtmetrix.com/",
            desc: "Analisar velocidade e recursos que o site consome."
          }, 
          {
            titulo:"Google PageSpeed",
            url: "https://developers.google.com/speed/pagespeed/insights/",
            desc: "Analisar velocidade e recursos que o site consome."
          }
        ]
      },
      email:{
        titulo:"E-mail",
        sites:[]
      },
      dominio:{
        titulo:"Domínio",
        sites:[]
      },
      cloud:{
        titulo:"Cloud",
        sites:[]
      }
    }
  })