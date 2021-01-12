import Notify from './notify';
export default class Custom extends Notify {
    constructor(webhook, githubCtx, inputs) {
        super(webhook, githubCtx, inputs);
    }
    notify() {
        throw new Error('Method not implemented.');
    }
    async notifyFailure() {
        return '';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsYXQvY3VzdG9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBd0IsTUFBTSxVQUFVLENBQUM7QUFFaEQsTUFBTSxDQUFDLE9BQU8sT0FBTyxNQUFPLFNBQVEsTUFBTTtJQUN4QyxZQUFZLE9BQWUsRUFBRSxTQUFrQixFQUFFLE1BQVc7UUFDMUQsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELE1BQU07UUFDSixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELEtBQUssQ0FBQyxhQUFhO1FBQ2pCLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUNGIn0=