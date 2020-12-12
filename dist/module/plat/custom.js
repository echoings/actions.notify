import Notify from './notify';
export default class Custom extends Notify {
    constructor(webhook, githubCtx, options) {
        super(webhook, githubCtx, options);
    }
    notify() {
        throw new Error('Method not implemented.');
    }
    genSin(_signKey, _timestamp) {
        return 'Please generate signatue yourself';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsYXQvY3VzdG9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBd0IsTUFBTSxVQUFVLENBQUE7QUFFL0MsTUFBTSxDQUFDLE9BQU8sT0FBTyxNQUFPLFNBQVEsTUFBTTtJQUN4QyxZQUFZLE9BQWUsRUFBRSxTQUFrQixFQUFFLE9BQVk7UUFDM0QsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUNELE1BQU07UUFDSixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUNELE1BQU0sQ0FBQyxRQUE0QixFQUFFLFVBQWtCO1FBQ3JELE9BQU8sbUNBQW1DLENBQUE7SUFDNUMsQ0FBQztDQUNGIn0=