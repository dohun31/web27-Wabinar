export const WORKSPACE_EVENT = {
  START_MEETING: 'start-meeting',
  END_MEETING: 'end-meeting',
  SEND_HELLO: 'send-hello',
  RECEIVE_HELLO: 'receive-hello',
  SEND_OFFER: 'send-offer',
  RECEIVE_OFFER: 'receive-offer',
  SEND_ANSWER: 'send-answer',
  RECEIVE_ANSWER: 'receive-answer',
  SEND_ICE: 'send-ice',
  RECEIVE_ICE: 'receive-ice',
  RECEIVE_BYE: 'receive_bye',
};

export const MOM_EVENT = {
  CREATE: 'create',
  SELECT: 'select',
  UPDATE_TITLE: 'update-mom-title',
  INIT: 'init-mom',
  INSERT_BLOCK: 'insert-block',
  DELETE_BLOCK: 'delete-block',
  UPDATED: 'updated-mom',
};

export const BLOCK_EVENT = {
  INIT: 'init-block',
  LOAD_TYPE: 'load-type',
  UPDATE_TYPE: 'update-type',
  INSERT_TEXT: 'insert-text',
  DELETE_TEXT: 'delete-text',
  UPDATE_TEXT: 'update-text',
  CREATE_VOTE: 'create-vote',
  UPDATE_VOTE: 'update-vote',
  END_VOTE: 'end-vote',
  FETCH_QUESTIONS: 'fetch-questions',
  ADD_QUESTIONS: 'add-questions',
  RESOLVE_QUESTIONS: 'resolve-questions',
};
