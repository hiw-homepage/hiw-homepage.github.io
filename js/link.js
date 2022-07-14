$('#generation').on('click', function() {
    if ($('#url').val() !== "" && $('#slug').val() !== "" && $('#title').val() !== "") {
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'pk_NfU4JNZYQbhMNdpi'
        },
        body: JSON.stringify({
          allowDuplicates: false,
          domain: 'link.hiw-homepage.ml',
          originalURL: $('#url').val(),
          path: $('#slug').val(),
          title: $('#title').val()
        })
      };

      fetch('https://api.short.io/links/public', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    } else {
      if ($('#url').val() !== "" && $('#slug').val() !== "") {
        const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'pk_NfU4JNZYQbhMNdpi'
        },
        body: JSON.stringify({
          allowDuplicates: false,
          domain: 'link.hiw-homepage.ml',
          originalURL: $('#url').val(),
          path: $('#slug').val()
        })
      };

      fetch('https://api.short.io/links/public', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
      } else if ($('#url').val() !== "" && $('#title').val() !== "") {
        const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'pk_NfU4JNZYQbhMNdpi'
        },
        body: JSON.stringify({
          allowDuplicates: false,
          domain: 'link.hiw-homepage.ml',
          originalURL: $('#url').val(),
          title: $('#title').val()
        })
      };

      fetch('https://api.short.io/links/public', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
      } else if ($('#url').val() !== "") {
        const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'pk_NfU4JNZYQbhMNdpi'
        },
        body: JSON.stringify({
          allowDuplicates: false,
          domain: 'link.hiw-homepage.ml',
          originalURL: $('#url').val()
        })
      };

      fetch('https://api.short.io/links/public', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
      }
    }
  })
