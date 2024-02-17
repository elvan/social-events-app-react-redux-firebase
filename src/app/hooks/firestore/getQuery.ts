import { Query, collection, orderBy, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { CollectionOptions } from './types';

export const getQuery = (path: string, options?: CollectionOptions): Query => {
  let q = collection(db, path) as Query;

  if (options && options.queries) {
    options.queries.forEach(({ attribute, operator, value }) => {
      q = query(q, where(attribute, operator, value));
    });
  }

  if (options && options.sort) {
    const { attribute, order } = options.sort;
    q = query(q, orderBy(attribute, order));
  }

  return q;
};
