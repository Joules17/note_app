import axios from 'axios';

export const useExternalApi = () => {
    const apiServerUrl = "http://localhost:8080"; 

    const makeRequest = async (options) => {
        try {
            const response = await axios(options.config)
            const {data}  = response
            
            return data
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response.data
            }

            return error.message
        }
    }

    const getNotes = async (setNotes, active) => {
        var url = active ? `${apiServerUrl}/notes/active` : `${apiServerUrl}/notes/archived`
        const config = {
            url: url,
            method: 'GET',
            headers: {}, 
            data: {}
        }

        const data = await makeRequest({config})
        // console.log(data)
        setNotes(data)
    }

    const createNote = async (note) => {
        const config = {
            url: `${apiServerUrl}/create`, 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            data: note
        }

        const data = await makeRequest({config})
        console.log("Note created successfully", data)
    }

    const updateNote = async (note) => {
        console.log('Me esta llegnado esta note: ', note)
        const config = {
            url: `${apiServerUrl}/update`, 
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }, 
            data: note
        }

        const data = await makeRequest({config})
        console.log("Response: ", data)
    }

    const deleteNote = async (note) => {
        const config = {
            url: `${apiServerUrl}/delete/${note.id}`, 
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }, 
            data: {}
        }

        const data = await makeRequest({config})
        console.log("Response: ", data)
    }



    return {
        getNotes, 
        createNote, 
        updateNote,
        deleteNote
    }
}