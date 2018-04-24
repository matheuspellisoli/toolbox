Vue.component('listbox', { 
  props: ['site'],
    template: `
    <a class="subbox" href="{{site.url}}" target=”_blank”>
        <div >
            <p class="subboxtitulo"{{site.titulo}}</p>
            <p class="{{site.desc}}</p>
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
                  <div class="contedoBox" v-for="site in data.sites">
                      <listbox v-bind:site="site"> </listbox>
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
            titulo:"Teste",
            url: "www.google.com",
            desc: "site de busca"
          },
          {
            titulo:"Teste2",
            url: "www.google.com",
            desc: "site de busca"
          }
        ]
      },
      email:{
        titulo:"E-mail",
        sites:[
          {
            titulo:"Teste",
            url: "www.google.com",
            desc: "site de busca"
          },
          {
            titulo:"Teste2",
            url: "www.google.com",
            desc: "site de busca"
          }
        ]
      },
      dominio:{
        titulo:"Domínio",
        sites:[
          {
            titulo:"Teste",
            url: "www.google.com",
            desc: "site de busca"
          },
          {
            titulo:"Teste2",
            url: "www.google.com",
            desc: "site de busca"
          }
        ]
      },
      cloud:{
        titulo:"Cloud",
        sites:[
          {
            titulo:"Teste",
            url: "www.google.com",
            desc: "site de busca"
          },
          {
            titulo:"Teste2",
            url: "www.google.com",
            desc: "site de busca"
          }
        ]
      }
    }
  })