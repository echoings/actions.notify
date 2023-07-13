import Notify from './notify';
export default class Slack extends Notify {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGxhdC9zbGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQXdCLE1BQU0sVUFBVSxDQUFDO0FBRWhELE1BQU0sQ0FBQyxPQUFPLE9BQU8sS0FBTSxTQUFRLE1BQU07SUFDdkMsWUFBWSxPQUFlLEVBQUUsU0FBa0IsRUFBRSxNQUFXO1FBQzFELEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxNQUFNO1FBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxLQUFLLENBQUMsYUFBYTtRQUNqQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FDRiJ9