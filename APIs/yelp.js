import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization :'Bearer kg72gDTvKnUfKuISe8juDk-NIV1T-3QCWSuvFwYaK_VW0tE1Ch3_z8UOj9LstfemTywKhUOoXCYO0Cfm4MoM8dsv8qhqhnEDxogNCmQxkXbXccopyOoKz40xplLmXXYx'
    }
})