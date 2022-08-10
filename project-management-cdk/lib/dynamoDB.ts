import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export default class ProjectManagementDB extends Construct {
  public readonly projectManagementTable: dynamodb.ITable;

  constructor(scope: Construct, id: string) {
    super(scope, id);
    const table = new dynamodb.Table(this, 'ProjectManagementTable', {
      partitionKey: { name: 'PK', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'SK', type: dynamodb.AttributeType.STRING },
      tableName: 'ProjectManagementTable',
      billingMode: dynamodb.BillingMode.PROVISIONED,
      readCapacity: 1,
      writeCapacity: 1,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    table.addGlobalSecondaryIndex({
      indexName: 'GSI1',
      partitionKey: { name: 'GSI1PK', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'GSI1SK', type: dynamodb.AttributeType.STRING },
      readCapacity: 1,
      writeCapacity: 1,
      projectionType: dynamodb.ProjectionType.ALL,
    });

    this.projectManagementTable = table;
  }
}
