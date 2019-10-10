import { GetJobs } from "@zowe/cli";
import { Session, ISession, Logger, LoggingConfigurer } from "@zowe/imperative";

(async () => {
    // init dummy logger for imperative
    Logger.initLogger(LoggingConfigurer.configureLogger(".sample", { name: "sample" }));

    // connection info (host, user, password, etc...)
    const connectionInfo: ISession = {
        hostname: "some-host",
        user: "user",
        password: "pass",
        type: "basic",
        rejectUnauthorized: false
    };
    
    // create a session & get jobs
    const session = new Session(connectionInfo);
    const jobs = await GetJobs.getJobs(session);

    // print all obtained job names
    jobs.forEach((job) => {
        console.log(`Got job: ${job.jobname} ${job.status}`);
    });
})();
