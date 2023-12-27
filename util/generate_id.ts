import { counter } from ".";
import ENV from "../../config";

const generateReturn = (
    template: string,
    id,
    length: number
): string[] | string => {
    if (!length) {
        return template + ENV.seperator + id.count;
    } else {
        let generatedIds = [];
        const counter = id.count - length;
        for (let i = 1; i <= length; i++) {
            generatedIds.push(template + ENV.seperator + (counter + i));
        }
        return generatedIds;
    }
};
export class GenerateId {
    static OrganizationSessionId = async (organizationId) => {
        let organizationCount = await counter(
            `organizationSession:${organizationId}`
        );
        return organizationCount.count;
    };
    static KL_USER_IDS = async (length) => {
        let kl_id = await counter(`KL_USER_ID`, length);
        let generatedIds = [];
        const count = kl_id.count - length;
        for (let i = 1; i <= length; i++) {
            generatedIds.push(count + i);
        }
        return generatedIds;
    };
    static LeaveRequest = async (userId) => {
        let userCounter = await counter(`leaveRequest:${userId}`);
        return (
            userId +
            ENV.seperator +
            "leaveRequest" +
            ENV.seperator +
            userCounter.count
        );
    };
    static User = async (organizationId, userType) => {
        let userCounter = await counter(`user:${organizationId}`);
        return (
            organizationId +
            ENV.seperator +
            ENV.seperator +
            ENV.seperator +
            ENV.seperator +
            userType +
            ENV.seperator +
            userCounter.count
        );
    };
    static Assignment = async (subjectId) => {
        let assignmentCounter = await counter(`assignment:${subjectId}`);
        return (
            subjectId +
            ENV.seperator +
            "assignment" +
            ENV.seperator +
            assignmentCounter.count
        );
    };
    static Resource = async (subjectId) => {
        let resourceCounter = await counter(`resource:${subjectId}`);
        return (
            subjectId +
            ENV.seperator +
            "resource" +
            ENV.seperator +
            resourceCounter.count
        );
    };
    static FeeStructure = async (classroomId) => {
        let feeIdCounter = await counter(`fee_structure:${classroomId}`);
        return (
            classroomId +
            ENV.seperator +
            ENV.seperator +
            "fee" +
            ENV.seperator +
            feeIdCounter.count
        );
    };
    static FeeReceipt = async (feeId, length?) => {
        let feeReceiptCounter = await counter(`fee_receipt:${feeId}`, length);
        const template = feeId + ENV.seperator;
        return generateReturn(template, feeReceiptCounter, length);
    };
    static DailyDiary = async (subjectId, length?) => {
        let diaryCounter = await counter(`dailydiary:${subjectId}`, length);
        const template = subjectId + ENV.seperator + "dailydiary";
        return generateReturn(template, diaryCounter, length);
    };
    static MarkingArea = async (subjectId, length?) => {
        let markingAreaCounter = await counter(
            `marking_area:${subjectId}`,
            length
        );
        const template =
            subjectId + ENV.seperator + ENV.seperator + "marking_area";
        return generateReturn(template, markingAreaCounter, length);
    };
    static Notice = async (organizationId, _s) => {
        const applicationFormCounter = await counter(
            `notice:${organizationId}:${_s}`
        );
        const _id = `${organizationId}:${_s}:::notice:${applicationFormCounter.count}`;
        return _id;
    };
    static Classroom = async (organizationId, _s, length?) => {
        let classroomCounter = await counter(
            `classroom:${organizationId}`,
            length
        );
        const template = organizationId + ENV.seperator + _s;
        return generateReturn(template, classroomCounter, length);
    };
    static Subject = async (classroomId, length?) => {
        let subjectCounter = await counter(`subject:${classroomId}`, length);
        // const _id = `${classroomId}${ENV.seperator}${subjectCounter.count}${flag}`;
        return generateReturn(classroomId, subjectCounter, length);
    };
    static ApplicationForm = async (organization, _s) => {
        const applicationFormCounter = await counter(
            `applicationForm:${organization}:${_s}`
        );
        const _id = `${organization}:${_s}:::applicationForm:${applicationFormCounter.count}`;
        return _id;
    };
}
