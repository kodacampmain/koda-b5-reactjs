import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import fetchUrl from "../../utils/fetch";
import { getPokemonData, getPokemonType } from "../../api/getPokemonData";

const getPokemonThunk = createAsyncThunk(
  "pokemon/getPokemon",
  async (payload, { rejectWithValue }) => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=100";
      const data = await getPokemonData(url);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  },
);
const getTypeThunk = createAsyncThunk(
  "pokemon/getType",
  async (payload, { rejectWithValue }) => {
    try {
      const url = "https://pokeapi.co/api/v2/type";
      const data = await getPokemonType(url);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  pokemons: [],
  types: [],
  fetchStatus: {
    pokemon: {
      isLoading: false,
      isSuccess: false,
      isFailed: false,
    },
    type: {
      isLoading: false,
      isSuccess: false,
      isFailed: false,
    },
  },
  errors: {
    pokemon: null,
    type: null,
  },
};

const pokemonSlice = createSlice({
  initialState,
  name: "pokemon",
  //   reducers: {},
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(getPokemonThunk, {
        pending: (prevState) => {
          prevState.fetchStatus.pokemon.isLoading = true;
          prevState.fetchStatus.pokemon.isSuccess = false;
          prevState.fetchStatus.pokemon.isFailed = false;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.pokemon.isLoading = false;
          prevState.fetchStatus.pokemon.isSuccess = true;
          prevState.pokemons = payload;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.pokemon.isLoading = false;
          prevState.fetchStatus.pokemon.isFailed = true;
          prevState.errors.pokemon = payload;
        },
      })
      .addAsyncThunk(getTypeThunk, {
        pending: (prevState) => {
          prevState.fetchStatus.type.isLoading = true;
          prevState.fetchStatus.type.isSuccess = false;
          prevState.fetchStatus.type.isFailed = false;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.fetchStatus.type.isLoading = false;
          prevState.fetchStatus.type.isSuccess = true;
          prevState.types = payload;
        },
        rejected: (prevState, { payload }) => {
          prevState.fetchStatus.type.isLoading = false;
          prevState.fetchStatus.type.isFailed = true;
          prevState.errors.type = payload;
        },
      });
    //   .addCase(getPokemonThunk.pending, () => {})
    //   .addCase(getPokemonThunk.fulfilled, () => {})
    //   .addCase(getPokemonThunk.rejected, () => {});
  },
});

export const pokemonActions = {
  ...pokemonSlice.actions,
  getPokemonThunk,
  getTypeThunk,
};
export default pokemonSlice.reducer;
