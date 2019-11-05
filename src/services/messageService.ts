import { Subject } from 'rxjs';

const subject = new Subject();

const messageService = {
    sendMessage: (message:string) => subject.next({ text: message }),
    clearMessages: () => subject.next(),
    getMessage: () => subject.asObservable()
};

export { messageService };
