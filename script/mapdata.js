var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#4296de",
    state_hover_color: "#0c6dbc",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: "0.8",
    location_hover_opacity: 1,
    location_size: "5",
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    UZAN: {
      name: "Andijon",
      description: "Aholisi: 3.2 million\n\nMaydoni: 4,200 km²\n\nMa’lumot: Farg‘ona vodiysida joylashgan, sanoat va qishloq xo‘jaligi rivojlangan."
    },
    UZBU: {
      name: "Buxoro",
      description: "Aholisi: 2.1 million\n\nMaydoni: 39,400 km²\n\nMa’lumot: Tarixiy yodgorliklarga boy, cho‘l zonasi ko‘p. Neft-gaz konlariga ega."
    },
    UZFA: {
      name: "Farg'ona",
      description: "Aholisi: 3.9 million\n\nMaydoni: 6,800 km²\n\nMa’lumot: Aholisi eng zich yashaydigan viloyat, hunarmandchilik markazi sifatida tanilgan."
    },
    UZJI: {
      name: "Jizzax",
      description: "Aholisi: 1.5 million\n\nMaydoni: 21,200 km²\n\nMa’lumot: Tog‘li va dashtli hudud. Paxtachilik va chorvachilik rivojlangan."
    },
    UZNG: {
      name: "Namangan",
      description: "Aholisi: 3.0 million\n\nMaydoni: 7,900 km²\n\nMa’lumot: Vodiyning yana bir muhim qismi, issiq iqlimi va bog‘lari bilan mashhur."
    },
    UZNW: {
      name: "Navoiy",
      description: "Aholisi: 1.1 million\n\nMaydoni: 111,000 km²\n\nMa’lumot: Yer maydoni jihatdan eng katta viloyat. Kon sanoati (oltin, uran) rivojlangan."
    },
    UZQA: {
      name: "Qashqadaryo",
      description: "Aholisi: 3.4 million\n\nMaydoni: 28,400 km²\n\nMa’lumot: Tog‘li va cho‘l zonasi bor. Neft, gaz va paxta yetishtirishda yetakchi."
    },
    UZQR: {
      name: "Qoraqalpog'iston",
      description: "Aholisi: 2.0 million\n\nMaydoni: 166,600 km²\n\nMa’lumot: Avtonom respublika. Amudaryo bo‘yida joylashgan, Aral dengizi inqirozi bilan bog‘liq ekologik muammolarga ega."
    },
    UZSA: {
      name: "Samarqand",
      description: "Aholisi: 4.1 million\n\nMaydoni: 16,400 km²\n\nMa’lumot: Tarixiy markaz, qadimgi shaharlardan biri. Turizm va qishloq xo‘jaligi rivojlangan."
    },
    UZSI: {
      name: "Sirdaryo",
      description: "Aholisi: 900 ming\n\nMaydoni: 4,300 km²\n\nMa’lumot: Respublikaning eng kichik viloyati, sanoat va paxtachilik rivojlangan."
    },
    UZSU: {
      name: "Surxandaryo",
      description: "Aholisi: 2.9 million\n\nMaydoni: 20,100 km²\n\nMa’lumot: Tojikiston va Afg‘oniston bilan chegaradosh. Issiq iqlim va bog‘dorchilik rivojlangan."
    },
    UZTK: {
      name: "Toshkent",
      description: "Aholisi: 2.9 million\n\nMaydoni: 336 km²\n\nMa’lumot: O‘zbekiston poytaxti va eng yirik shahri. Sanoat, ilm-fan, madaniyat markazi hisoblanadi."
    },
    UZTO: {
      name: "Toshkent",
      description: "Aholisi: 2.9 million\n\nMaydoni: 336 km²\n\nMa’lumot: O‘zbekiston poytaxti va eng yirik shahri. Sanoat, ilm-fan, madaniyat markazi hisoblanadi."
    },
    UZXO: {
      name: "Xorazm",
      description: "Aholisi: 2.0 million\n\nMaydoni: 6,300 km²\n\nMa’lumot: Qadimiy Xiva shahri shu yerda joylashgan. Sug‘orma dehqonchilik rivojlangan."
    }
  },
  locations: {
    "0": {
      name: "Tashkent",
      lat: "41.316667",
      lng: "69.25"
    }
  },
  labels: {
    UZAN: {
      name: "Andijon",
      parent_id: "UZAN"
    },
    UZBU: {
      name: "Bukhoro",
      parent_id: "UZBU"
    },
    UZFA: {
      name: "Ferghana",
      parent_id: "UZFA"
    },
    UZJI: {
      name: "Jizzakh",
      parent_id: "UZJI"
    },
    UZNG: {
      name: "Namangan",
      parent_id: "UZNG"
    },
    UZNW: {
      name: "Navoi",
      parent_id: "UZNW"
    },
    UZQA: {
      name: "Kashkadarya",
      parent_id: "UZQA"
    },
    UZQR: {
      name: "Karakalpakstan",
      parent_id: "UZQR"
    },
    UZSA: {
      name: "Samarkand",
      parent_id: "UZSA"
    },
    UZSI: {
      name: "Sirdaryo",
      parent_id: "UZSI"
    },
    UZSU: {
      name: "Surkhandarya",
      parent_id: "UZSU"
    },
    UZTK: {
      name: "Tashkent",
      parent_id: "UZTK"
    },
    UZTO: {
      name: "Tashkent",
      parent_id: "UZTO"
    },
    UZXO: {
      name: "Khorezm",
      parent_id: "UZXO"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};