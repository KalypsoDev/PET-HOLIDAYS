import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})


export const apartmentService = {

    async getAllApartments() {

        let response = await apiClient.get("/apartments");
        let allApartments = response.data
        return allApartments;

    },

    async submitApartment(apartment) {

        let updatedResponse = await apiClient.post("/apartments", apartment);
        return updatedResponse;

    },

    async deleteApartment(index){

            try {
                const url = `/apartments/${index}`;                
                console.log('URL de la solicitud de eliminación:', url);
                
                let respuesta = await apiClient.delete(url);
                console.log('vivienda eliminado:', respuesta);
                return respuesta;

            } catch (error) {
                console.error('Error al eliminar la vivienda:', error.response ? error.response.data : error.message);
        
                return null;
            }
    },


    async updateApartment(apartment,index) {

        let updatedResponse = await apiClient.patch(`/apartments/${apartment.id}`, apartment);
        return updatedResponse;
    },

}