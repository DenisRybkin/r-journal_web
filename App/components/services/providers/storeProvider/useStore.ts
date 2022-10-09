import { isServer } from "../../../../helpers/assistiveHelpers";
import { RootStore } from "../../../../stores/rootStore";
import { enableStaticRendering } from "mobx-react-lite";
// we need to enable static rendering for prevent rerender on server side and leaking memory

// enable static rendering ONLY on server
enableStaticRendering(isServer());

// init a client store that we will send to client (one store for client)
let clientStore: RootStore;

const initStore = (initData) => {
  // check if we already declare store (client Store), otherwise create one
  const store = clientStore ?? new RootStore();
  // hydrate to store if receive initial data
  //if (initData && Object.values(initData).length > 0) store.hydrate(initData);

  // Create a store on every server request
  if (typeof window === "undefined") return store;
  // Otherwise it's client, remember this store and return
  if (!clientStore) clientStore = store;
  return store;
};

export const useStore = (initData) => initStore(initData);
