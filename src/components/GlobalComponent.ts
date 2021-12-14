import { Component, BaseComponent, Global, Handle } from '@jovotech/framework';
import { AlexaHandles, ApiResponseOutput } from '@jovotech/platform-alexa';
import Dogs from '../api/PetMatch.json';

/*
|--------------------------------------------------------------------------
| Global Component
|--------------------------------------------------------------------------
|
| The global component handlers can be reached from anywhere in the app
| Learn more here: www.jovo.tech/docs/components#global-components
|
*/
@Global()
@Component()
export class GlobalComponent extends BaseComponent {
  @Handle(AlexaHandles.onDialogApiInvoked('getRecommendation'))
  handleRecommendation() {
    const { energy, size, temperament } = this.$entities;
    const key: string = `${energy!.value}-${size!.value}-${temperament!.value}`;
    const { breed } = Dogs[key as keyof typeof Dogs];

    return this.$send(ApiResponseOutput, {
      listen: false,
      apiResponse: {
        name: breed,
      },
    });
  }
}
