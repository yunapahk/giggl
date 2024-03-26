import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: !!localStorage.getItem('authToken'),
    authToken: localStorage.getItem('authToken'),
    isSuperuser: localStorage.getItem('isSuperuser') === 'true',
  },
  mutations: {
    setAuth(state, { token, isSuperuser }) {
      state.isAuthenticated = !!token;
      state.authToken = token;
      state.isSuperuser = isSuperuser;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.authToken = null;
      state.isSuperuser = false;
    }
  },
  actions: {
    login({ commit }, { token, isSuperuser }) {
      // Assuming 'token' is a string and 'isSuperuser' is a boolean.
      if (token && typeof isSuperuser !== 'undefined') {
        // Update Vuex state
        commit('setAuth', { token, isSuperuser });
  
        // Store in localStorage. Note: localStorage only stores strings.
        localStorage.setItem('authToken', token);
        localStorage.setItem('isSuperuser', isSuperuser.toString()); // Convert boolean to string
      } else {
        console.error("Invalid login payload");
      }
    },
    logout({ commit }) {
      // Clear Vuex state
      commit('logout');
  
      // Clear localStorage
      localStorage.removeItem('authToken');
      localStorage.removeItem('isSuperuser');
    }
  }  
});
