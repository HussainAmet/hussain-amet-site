import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  about: {},
  contacts: {},
  educations: [],
  experiences: [],
  home: {},
  skills: [],
  projects: {},
  socialLinks: {},
  my_projects: {},

  isLoaded: false,
};

const siteDataSlice = createSlice({
  name: "siteData",
  initialState,
  reducers: {
    setData: (state, action) => {
      return {
        ...state,
        ...action.payload,
        contacts: action.payload.contacts.contacts || {},
        educations: action.payload.educations.educations || {},
        experiences: action.payload.experiences.experiences || {},
        skills: action.payload.skills.skills || {},
        isLoaded: true,
      };
    },
    resetData: () => initialState,
  },
});

export const { setData, resetData } = siteDataSlice.actions;
export default siteDataSlice.reducer;
