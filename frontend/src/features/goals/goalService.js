import axios from 'axios'

const API_URL = 'https://goal-setter-mern123.herokuapp.com/api/goals/'

// create new goal
const createGoal = async (goalData,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const res = await axios.post(API_URL,goalData,config)

    return res.data
}

// get all goals
const getGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const res = await axios.get(API_URL,config)

    return res.data
}
// delete goal
const deleteGoal = async (id,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const res = await axios.delete(API_URL + id, config)

    return res.data
}


const goalService = {
    createGoal,
    getGoals,
    deleteGoal
}

export default goalService