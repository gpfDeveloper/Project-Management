import * as lambdaNode from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import { join } from 'path';

type ProjectManagementLambdaProps = {
  projectManagementTable: dynamodb.ITable;
};

export default class ProjectManagementLambda extends Construct {
  public readonly projectManagementLambda: lambdaNode.NodejsFunction;

  constructor(
    scope: Construct,
    id: string,
    props: ProjectManagementLambdaProps
  ) {
    super(scope, id);

    const lambdaFn = new lambdaNode.NodejsFunction(
      this,
      'ProjectManagementLambda',
      {
        runtime: lambda.Runtime.NODEJS_16_X,
        environment: {
          TABLE_NAME: props.projectManagementTable.tableName,
        },
        entry: join(__dirname, '..', 'src', 'db', 'index.ts'),
      }
    );

    props.projectManagementTable.grantReadWriteData(lambdaFn);

    this.projectManagementLambda = lambdaFn;
  }
}
