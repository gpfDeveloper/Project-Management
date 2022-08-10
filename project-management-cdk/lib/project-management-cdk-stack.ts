import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import ProjectManagementApiGateway from './apiGateway';
import ProjectManagementDB from './dynamoDB';
import ProjectManagementLambda from './lambda';

export class ProjectManagementCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const projectManagementTable = new ProjectManagementDB(
      this,
      'ProjectManagmentTable'
    );

    const projectManagementLambda = new ProjectManagementLambda(
      this,
      'ProjectManagementLambda',
      { projectManagementTable: projectManagementTable.projectManagementTable }
    );

    new ProjectManagementApiGateway(this, 'ProjectManagementApiGateway', {
      projectManagementLambda: projectManagementLambda.projectManagementLambda,
    });
  }
}
