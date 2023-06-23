import * as cdk from 'aws-cdk-lib';
import * as path from 'path';
import { aws_cloudformation as cfn } from 'aws-cdk-lib';
import { aws_ecs as ecs } from 'aws-cdk-lib';
import { aws_elasticloadbalancingv2 as elbv2 } from 'aws-cdk-lib';
import { aws_iam as iam } from 'aws-cdk-lib';
import { aws_logs as logs } from 'aws-cdk-lib';
import { aws_servicediscovery as sd } from 'aws-cdk-lib';

interface TransformedStackProps extends cdk.StackProps {
    readonly appName: string;
    readonly envName: string;
}

export class TransformedStack extends cdk.Stack {
    public readonly template: cdk.cloudformation_include.CfnInclude;
    public readonly appName: string;
    public readonly envName: string;

    constructor (scope: cdk.App, id: string, props: TransformedStackProps) {
        super(scope, id, props);
        this.template = new cdk.cloudformation_include.CfnInclude(this, 'Template', {
            templateFile: path.join('.build', 'in.yml'),
        });
        this.appName = props.appName;
        this.envName = props.envName;
        this.transformAddonsStack();
        this.transformService();
        this.transformTaskDefinition();
        this.transformHTTPListenerRule();
        this.transformTargetGroup();
        this.transformEnvControllerRole();
        this.transformExecutionRole();
        this.transformRulePriorityFunctionRole();
        this.transformTaskRole();
        this.transformLogGroup();
        this.transformDiscoveryService();
    }
    
    // TODO: implement me.
    transformAddonsStack() {
        const addonsStack = this.template.getResource("AddonsStack") as cfn.CfnStack;
        throw new Error("not implemented");
    }
    
    // TODO: implement me.
    transformService() {
        const service = this.template.getResource("Service") as ecs.CfnService;
        throw new Error("not implemented");
    }
    
    // TODO: implement me.
    transformTaskDefinition() {
        const taskDefinition = this.template.getResource("TaskDefinition") as ecs.CfnTaskDefinition;
        throw new Error("not implemented");
    }
    
    // TODO: implement me.
    transformHTTPListenerRule() {
        const httplistenerRule = this.template.getResource("HTTPListenerRule") as elbv2.CfnListenerRule;
        throw new Error("not implemented");
    }
    
    // TODO: implement me.
    transformTargetGroup() {
        const targetGroup = this.template.getResource("TargetGroup") as elbv2.CfnTargetGroup;
        throw new Error("not implemented");
    }
    
    // TODO: implement me.
    transformEnvControllerRole() {
        const envControllerRole = this.template.getResource("EnvControllerRole") as iam.CfnRole;
        throw new Error("not implemented");
    }
    
    // TODO: implement me.
    transformExecutionRole() {
        const executionRole = this.template.getResource("ExecutionRole") as iam.CfnRole;
        throw new Error("not implemented");
    }
    
    // TODO: implement me.
    transformRulePriorityFunctionRole() {
        const rulePriorityFunctionRole = this.template.getResource("RulePriorityFunctionRole") as iam.CfnRole;
        throw new Error("not implemented");
    }
    
    // TODO: implement me.
    transformTaskRole() {
        const taskRole = this.template.getResource("TaskRole") as iam.CfnRole;
        throw new Error("not implemented");
    }
    
    // TODO: implement me.
    transformLogGroup() {
        const logGroup = this.template.getResource("LogGroup") as logs.CfnLogGroup;
        throw new Error("not implemented");
    }
    
    // TODO: implement me.
    transformDiscoveryService() {
        const discoveryService = this.template.getResource("DiscoveryService") as sd.CfnService;
        throw new Error("not implemented");
    }
    
}