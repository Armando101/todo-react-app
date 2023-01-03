import { useMemo } from "react";
import { useReducer } from "react";
import { useEffect } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { item, sincronizedItem, loading, error } = state;

  // ACTION CREATORS
  const onError = (payload) => {
    dispatch({ type: actionTypes.error, payload });
  };

  const onLoading = (payload) => {
    dispatch({ type: actionTypes.loading, payload });
  };

  const onSincronized = (payload) => {
    dispatch({ type: actionTypes.sincronize, payload });
  };

  const onSetItem = (payload) => {
    dispatch({ type: actionTypes.setItem, payload });
  };

  // eslint-disable-next-line
  const defaultValue = useMemo(() => initialValue, []);

  useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem = [];

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(defaultValue));
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSetItem(parsedItem);
        onLoading(false);
        onSincronized(true);
      }, 1500);
    } catch {
      onError(true);
    }
    // eslint-disable-next-line
  }, [defaultValue, sincronizedItem]);

  const savedItem = (newItem) => {
    try {
      onSetItem(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem));
    } catch {
      onError(true);
    }
  };

  const sincronize = () => {
    onLoading(true);
    onSincronized(false);
  };

  return { item, savedItem, loading, error, sincronize };
}

const actionTypes = {
  error: "ERROR",
  loading: "LOADING",
  sincronize: "SINCRONIZE",
  setItem: "SET_ITEM",
};

const initialState = ({ initialValue }) => ({
  item: initialValue,
  sincronizedItem: true,
  loading: true,
  error: false,
});

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: payload,
  },
  [actionTypes.loading]: {
    ...state,
    loading: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronizedItem: payload,
  },
  [actionTypes.setItem]: {
    ...state,
    item: payload,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};
