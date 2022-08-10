import * as apiGateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

type Props = {
  projectManagmentLambda: lambda.IFunction;
};

export default class ProjectManagementApiGateway extends Construct {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id);
    const api = new apiGateway.LambdaRestApi(this, 'projectManagementApi', {
      handler: props.projectManagmentLambda,
      proxy: false,
    });

    /**
     * People
     * Get:
     * /people - get all members
     * /people?status=active - get active members
     * Post:
     * /people - add member
     * Put:
     * /people/{email} - update member
     *
     */
    const peopleApi = api.root.addResource('people');
    peopleApi.addMethod('GET');
    peopleApi.addMethod('POST');
    const singlePeopleApi = peopleApi.addResource('{email}');
    singlePeopleApi.addMethod('PUT');

    /**
     * Project
     * Get:
     * /projects - get all projects
     * /projects/{projectId} - get single project
     * Post:
     * /projects - add project
     * Put:
     * /projects/{projectId} - update project
     * Delete:
     * /projects/{projectId} - delete project
     *
     */
    const projectApi = api.root.addResource('projects');
    projectApi.addMethod('GET');
    projectApi.addMethod('POST');
    const singleProjectApi = projectApi.addResource('{projectId}');
    singleProjectApi.addMethod('GET');
    singleProjectApi.addMethod('PUT');
    singleProjectApi.addMethod('DELETE');

    /**
     * Issue
     * Get:
     * /projects/{projectId}/issues - project with issues
     * /projects/{projectId}/issues/{issueId} - single issue
     * /people/{email}/issues - active issues (todo and inProgress) assigned to user
     * Post:
     * /projects/{projectId}/issues - add an issue
     * Put:
     * /projects/{projectId}/issues/{issueId} - update an issue
     * Delete:
     * /projects/{projectId}/issues/{issueId} - delete an issue
     *
     */
    const issuesApi = singleProjectApi.addResource('issues');
    issuesApi.addMethod('GET');
    issuesApi.addMethod('POST');
    const singleIssueApi = issuesApi.addResource('{issueId}');
    singleIssueApi.addMethod('GET');
    singleIssueApi.addMethod('PUT');
    singleIssueApi.addMethod('DELETE');
    const issuesPeopleApi = singlePeopleApi.addResource('issues');
    issuesPeopleApi.addMethod('GET');

    /**
     * Comment
     * Get:
     * /projects/{projectId}/issues/{issueId}/comments - get all comments for the issue
     * Post:
     * /projects/{projectId}/issues/{issueId}/comments - add a comment for the issue
     * Put:
     * /projects/{projectId}/issues/{issueId}/comments/${commentId} - edit the comment
     * Delete:
     * /projects/{projectId}/issues/{issueId}/comments/${commentId} - delete the comment
     *
     */
    const commentApi = singleIssueApi.addResource('comments');
    commentApi.addMethod('GET');
    commentApi.addMethod('POST');
    const singleCommentApi = commentApi.addResource('{commentId}');
    singleCommentApi.addMethod('PUT');
    singleCommentApi.addMethod('DELETE');

    /**
     * History
     * Get:
     * /projects/{projectId}/issues/{issueId}/history - get all history for the issue
     * Post:
     * /projects/{projectId}/issues/{issueId}/history - add a history for the issue
     *
     */
    const hisotryApi = singleIssueApi.addResource('history');
    hisotryApi.addMethod('GET');
    hisotryApi.addMethod('POST');
  }
}
