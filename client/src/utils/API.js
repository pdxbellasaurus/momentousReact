import axios from "axios";

const API =  {
  // Gets all events
  getEvents: function() {
    return axios.get("/api/events");
  },
  // Gets the event with the given id
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  //Update event with a given id
  updateEvent: function(id, eventData) {
    return axios.put("/api/events/" + id, eventData)
  },
  // Deletes the event with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves a event to the database
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  },
 //create user
 saveUser: function(userData) {

  return axios.post("/api/users", userData);
 },
 // find one user with given id
 getUser: function(id) {
   return axios.get("/api/users/" + id)
 },

 //log in
 loginUser: function(userData) {
  
  return axios.post("/api/users/login", userData);
 },
 //log out
 logoutUser: function() {
   return axios.post("/api/users/logout");
 }
};

export default API