import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const accommodationService = {
  async getAllAccommodations() {
    let response = await apiClient.get("/accommodations");
    let allAccommodations = response.data;
    return allAccommodations;
  },

  async submitAccommodation(accommodation) {
    let updatedResponse = await apiClient.post("/accommodation", accommodation);
    return updatedResponse;
  },

  async deleteAccommodation(id) {
    try {
      const url = `/accommodation/${id}`;
      console.log("URL de la solicitud de eliminación:", url);

      let respuesta = await apiClient.delete(url);
      console.log("vivienda eliminada:", respuesta);
      return respuesta;
    } catch (error) {
      console.error(
        "Error al eliminar la vivienda:",
        error.response ? error.response.data : error.message
      );

      return null;
    }
  },

  async updateAccommodation(accommodation) {
    let updatedResponse = await apiClient.put(
      `/accommodation/${accommodation.id}`,
      accommodation
    );
    return updatedResponse;
  },
};
