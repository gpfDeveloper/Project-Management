import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

let client: DynamoDBClient | null = null;

export const getClient = (): DynamoDBClient => {
  if (client) return client;
  client = new DynamoDBClient({});
  return client;
};
