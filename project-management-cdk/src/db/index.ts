import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { getClient } from './client';
import { History, ProjectIssueProps, ProjectProps, TeamMember } from './types';

const client = getClient();

const TABLE_NAME = process.env.TABLE_NAME;

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  const pathParameters = event.pathParameters;
  const response: APIGatewayProxyResult = { statusCode: 200, body: 'test123' };
  return response;
};

const getUsers = async () => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getActiveUsers = async () => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getProjects = async () => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getProjectAndIssues = async (projectId: string) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getComments = async (issueId: string) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getHistories = async (issueId: string) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getUserIssues = async (email: string) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const addUser = async (email: string, name: string) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const updateUser = async (user: TeamMember) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const addProject = async (project: ProjectProps) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const updateProject = async (project: ProjectProps) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const deleteProject = async (projectId: string) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const addIssue = async (issue: ProjectIssueProps) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const updateIssue = async (issue: ProjectIssueProps) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const deleteIssue = async (issueId: string) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const addComment = async (
  createdBy: string,
  createdByName: string,
  content: string
) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const editComment = async (commentId: string, content: string) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const deleteComment = async (commentId: string) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const addHistory = async (issueId: string, history: History) => {
  try {
  } catch (err) {
    console.error(err);
    throw err;
  }
};
