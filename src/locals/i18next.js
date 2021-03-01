import i18next from "i18next"

fetch("http://localhost:3000/lang/es")
.then(res=>res.json())
.then(data=>{
  i18next.addResources("es","translation",data)
})

fetch("http://localhost:3000/lang/en")
.then(res=>res.json())
.then(data=>{
  i18next.addResources("en","translation",data)
})

export default i18next.init({
  lng: 'es',
  fallbackLng: "en",
  debug: true,
  resources: {
    es:{
      translation:{}
    },
    en:{
      translation:{}
    }
  }
})