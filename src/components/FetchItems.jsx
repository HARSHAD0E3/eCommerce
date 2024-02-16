import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { categoryActions } from "../store/categorySlice";

const FetchItems = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingEnded());
        dispatch(itemsActions.addInitialItems(data.items));
      });

    fetch("http://localhost:8080/categories", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(categoryActions.addInitialCategory(data.categories));
      });

    return () => {
      controller.abort;
    };
  }, [dispatch, fetchStatus]);
  return <></>;
};

export default FetchItems;
