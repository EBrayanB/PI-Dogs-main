import {
    GET_DOGS,
    GET_TEMPERAMENTS,
    GET_FILTER_TEMPERAMENTS,
    GET_BY_NAME,
    GET_BY_ID,
    SORT_BY_WEIGHT,
    ORDER_BY_NAME,
    FILTERED_BY_ORIGIN,
    POST_BREED,
    DELETE_DOG,
    UPDATE_DOG,
  } from "../actions/action-types";
  
  const initialState = {
    dogs: [],
    details: [],
    dogsCopy: [],
    temperaments: [],
    searchTerm: "",
    data: [],
    loading: false,
    error: null,
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_DOGS:
        return {
          ...state,
          dogs: action.payload,
          dogsCopy: action.payload,
        };
  
      case GET_TEMPERAMENTS:
        return {
          ...state,
          temperaments: action.payload,
        };
  
      case GET_FILTER_TEMPERAMENTS:
        const allDogs = state.dogsCopy;
        const filterDog =
          action.payload === "All"
            ? allDogs
            : allDogs.filter((e) => e.temperament?.includes(action.payload));
  
        const filterDB = [];
        allDogs.forEach((e) => {
          if (typeof e.id === "string") {
            e.temperament?.forEach((t) => {
              if (t === action.payload) filterDB.push(t);
            });
          }
        });
  
        return {
          ...state,
          dogs: filterDog.concat(filterDB),
        };
  
      case GET_BY_NAME:
        return {
          ...state,
          dogs: action.payload,
        };
  
      case "SEARCH_BREED":
        return {
          ...state,
          searchTerm: action.payload,
        };
  
      case GET_BY_ID:
        return {
          ...state,
          details: action.payload,
        };
  
      case SORT_BY_WEIGHT:
        const sortedByWeight = [...state.dogs].sort((a, b) => {
          const weightA = parseInt(a.weight.split(" - ")[0]);
          const weightB = parseInt(b.weight.split(" - ")[0]);
  
          if (action.payload === "min") {
            return weightA - weightB;
          } else {
            return weightB - weightA;
          }
        });
  
        return {
          ...state,
          dogs: sortedByWeight,
        };
  
      case ORDER_BY_NAME:
        const sortedByName = [...state.dogs].sort((a, b) => {
          if (action.payload === "asc") {
            return a.name.localeCompare(b.name);
          } else {
            return b.name.localeCompare(a.name);
          }
        });
  
        return {
          ...state,
          dogs: sortedByName,
        };
  
      case FILTERED_BY_ORIGIN:
        const filteredDogs = state.dogsCopy.filter((dog) => {
          if (action.payload === "all") {
            return true;
          } else {
            return action.payload === "created" ? dog.createInDb : !dog.createInDb;
          }
        });
  
        return {
          ...state,
          dogs: filteredDogs,
        };
  
      case POST_BREED:
        return {
          ...state,
          dogs: [...state.dogs, action.payload],
        };
  
      case DELETE_DOG:
        const newDogsCopy = state.dogsCopy.filter((dog) => dog.id !== action.payload);
        return {
          ...state,
          dogs: newDogsCopy,
          dogsCopy: newDogsCopy,
        };
  
      case UPDATE_DOG:
        const updatedDog = action.payload;
        const updatedData = state.data.map((dog) => {
          if (dog.id === updatedDog.id) {
            return updatedDog;
          }
          return dog;
        });
        return {
          ...state,
          data: updatedData,
        };
  
      default:
        return state;
    }
  }
  
  export default rootReducer;
  