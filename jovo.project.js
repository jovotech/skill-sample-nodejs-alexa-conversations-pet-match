const { AlexaCli } = require('@jovotech/platform-alexa');
const { ProjectConfig } = require('@jovotech/cli-core');

/*
|--------------------------------------------------------------------------
| JOVO PROJECT CONFIGURATION
|--------------------------------------------------------------------------
|
| Information used by the Jovo CLI to build and deploy projects
| Learn more here: www.jovo.tech/docs/project-config
|
*/
const project = new ProjectConfig({
  endpoint: '${JOVO_WEBHOOK_URL}',
  plugins: [
    // Add Jovo CLI plugins here
    new AlexaCli({
      locales: { en: ['en-US'] },
      conversations: {
        enabled: true,
        directory: 'resources/alexa/conversations',
        acdlDirectory: 'acdl',
        responsesDirectory: 'responses',
        sessionStartDelegationStrategy: {
          target: 'AMAZON.Conversations',
        },
      },
    }),
  ],
});

module.exports = project;
