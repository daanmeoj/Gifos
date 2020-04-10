class GiphyAPI {
  async getGifs(limit) {
    //Search by name
    const apiResponse = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=fXk4hALQmQWZGRZNz6R0x4XuztKdKMvK&limit=${limit}&rating=G`
    );

    //returns a JSON response
    const gifs = await apiResponse.json();

    return {
      gifs,
    };
  }

  async getGifsByName(limit, searchTerm) {
    //Search by name
    const apiResponse = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=fXk4hALQmQWZGRZNz6R0x4XuztKdKMvK&q=${searchTerm}&limit=${limit}&offset=0&rating=G&lang=en`
    );

    //returns a JSON response
    const gifs = await apiResponse.json();

    return {
      gifs,
    };
  }

  async PeticionPost(url, params = null) {
    try {
      const fetchData = await fetch(url, params);
      const response = await fetchData.json();
      return response;
    } catch (error) {
      if (error.name !== "Error") {
        console.log("Error al obtener la respuesta del servidor");
      }
      return error;
    }
  }

  async postear(formData) {
    let apiKey = "fXk4hALQmQWZGRZNz6R0x4XuztKdKMvK";
    const parametros = {
      method: "POST",
      body: formData,
      json: true,
    };
    const data = await this.PeticionPost(
      `https://upload.giphy.com/v1/gifs?api_key=${apiKey}`,
      parametros
    );

    // console.log(await data);
    return {
      data,
    };
  }
}
