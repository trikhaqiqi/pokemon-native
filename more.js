fetch('https://pokeapi.co/api/v2/nature/')
  .then(
    function(response) {
      if(response.status != 200){
        console.log('Oppss.. ' + response.status)
        return
      }

      response.json().then(function(data) {
        // console.log(data.results)
        const pokemons = data.results
        pokemons.forEach(pokemon => {
          document.getElementById('nature')
          .insertAdjacentHTML('beforeend', 
            `<li onclick='detail("${pokemon.url}")'>${pokemon.name}</li>`
          )
        })
      })
    }
  )
  .catch(function(err) {
    console.log(err)
  })


  fetch('https://pokeapi.co/api/v2/ability/')
  .then(
    function(response) {
      if(response.status != 200){
        console.log('Oppss.. ' + response.status)
        return
      }

      response.json().then(function(data) {
        // console.log(data.results)
        const pokemons = data.results
        pokemons.forEach(pokemon => {
          document.getElementById('ability')
          .insertAdjacentHTML('beforeend', 
            `<li onclick='detail("${pokemon.url}")'>${pokemon.name}</li>`
          )
        })
      })
    }
  )
  .catch(function(err) {
    console.log(err)
  })



  fetch('https://pokeapi.co/api/v2/egg-group/')
  .then(
    function(response) {
      if(response.status != 200){
        console.log('Oppss.. ' + response.status)
        return
      }

      response.json().then(function(data) {
        // console.log(data.results)
        const pokemons = data.results
        pokemons.forEach(pokemon => {
          document.getElementById('egg-group')
          .insertAdjacentHTML('beforeend', 
            `<li onclick='detail("${pokemon.url}")'>${pokemon.name}</li>`
          )
        })
      })
    }
  )
  .catch(function(err) {
    console.log(err)
  })

  fetch('https://pokeapi.co/api/v2/gender/')
  .then(
    function(response) {
      if(response.status != 200){
        console.log('Oppss.. ' + response.status)
        return
      }

      response.json().then(function(data) {
        // console.log(data.results)
        const pokemons = data.results
        pokemons.forEach(pokemon => {
          document.getElementById('gender')
          .insertAdjacentHTML('beforeend', 
            `<li onclick='detail("${pokemon.url}")'>${pokemon.name}</li>`
          )
        })
      })
    }
  )
  .catch(function(err) {
    console.log(err)
  })


  fetch('https://pokeapi.co/api/v2/growth-rate/')
  .then(
    function(response) {
      if(response.status != 200){
        console.log('Oppss.. ' + response.status)
        return
      }

      response.json().then(function(data) {
        // console.log(data.results)
        const pokemons = data.results
        pokemons.forEach(pokemon => {
          document.getElementById('growth-rates')
          .insertAdjacentHTML('beforeend', 
            `<li onclick='detail("${pokemon.url}")'>${pokemon.name}</li>`
          )
        })
      })
    }
  )
  .catch(function(err) {
    console.log(err)
  })

  fetch('https://pokeapi.co/api/v2/pokemon-color/')
  .then(
    function(response) {
      if(response.status != 200){
        console.log('Oppss.. ' + response.status)
        return
      }

      response.json().then(function(data) {
        // console.log(data.results)
        const pokemons = data.results
        pokemons.forEach(pokemon => {
          document.getElementById('color')
          .insertAdjacentHTML('beforeend', 
            `<li onclick='detail("${pokemon.url}")'>${pokemon.name}</li>`
          )
        })
      })
    }
  )
  .catch(function(err) {
    console.log(err)
  })

  fetch('https://pokeapi.co/api/v2/pokemon-habitat/')
  .then(
    function(response) {
      if(response.status != 200){
        console.log('Oppss.. ' + response.status)
        return
      }

      response.json().then(function(data) {
        // console.log(data.results)
        const pokemons = data.results
        pokemons.forEach(pokemon => {
          document.getElementById('habitat')
          .insertAdjacentHTML('beforeend', 
            `<li onclick='detail("${pokemon.url}")'>${pokemon.name}</li>`
          )
        })
      })
    }
  )
  .catch(function(err) {
    console.log(err)
  })

  fetch('https://pokeapi.co/api/v2/pokemon-species/')
  .then(
    function(response) {
      if(response.status != 200){
        console.log('Oppss.. ' + response.status)
        return
      }

      response.json().then(function(data) {
        // console.log(data.results)
        const pokemons = data.results
        pokemons.forEach(pokemon => {
          document.getElementById('spesies')
          .insertAdjacentHTML('beforeend', 
            `<li onclick='detail("${pokemon.url}")'>${pokemon.name}</li>`
          )
        })
      })
    }
  )
  .catch(function(err) {
    console.log(err)
  })


