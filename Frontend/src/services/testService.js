import { databases, ID, DATABASE_ID, TYPING_TESTS_COLLECTION_ID } from "../config/appwrite";
import { Query } from "appwrite";

/**
 * Save a typing test result to Appwrite
 */
export const saveTestResult = async (userId, testData) => {
  try {
    const document = await databases.createDocument(
      DATABASE_ID,
      TYPING_TESTS_COLLECTION_ID,
      ID.unique(),
      {
        userId,
        wpm: testData.wpm,
        accuracy: testData.accuracy,
        errors: testData.errors,
        duration: testData.duration,
        totalCharacters: testData.totalCharacters,
        timestamp: new Date().toISOString(),
      }
    );
    return { success: true, data: document };
  } catch (error) {
    console.error("Error saving test result:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Fetch test results for a specific user
 */
export const getUserTestResults = async (userId, limit = 10) => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      TYPING_TESTS_COLLECTION_ID,
      [
        Query.equal("userId", userId),
        Query.orderDesc("timestamp"),
        Query.limit(limit),
      ]
    );
    return { success: true, data: response.documents };
  } catch (error) {
    console.error("Error fetching test results:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Get user statistics
 */
export const getUserStats = async (userId) => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      TYPING_TESTS_COLLECTION_ID,
      [Query.equal("userId", userId), Query.orderDesc("timestamp")]
    );

    const tests = response.documents;
    
    if (tests.length === 0) {
      return {
        success: true,
        data: {
          totalTests: 0,
          averageWpm: 0,
          averageAccuracy: 0,
          bestWpm: 0,
          recentTests: [],
        },
      };
    }

    const totalTests = tests.length;
    const averageWpm = Math.round(
      tests.reduce((sum, test) => sum + test.wpm, 0) / totalTests
    );
    const averageAccuracy = Math.round(
      tests.reduce((sum, test) => sum + test.accuracy, 0) / totalTests
    );
    const bestWpm = Math.max(...tests.map((test) => test.wpm));

    return {
      success: true,
      data: {
        totalTests,
        averageWpm,
        averageAccuracy,
        bestWpm,
        recentTests: tests.slice(0, 10),
      },
    };
  } catch (error) {
    console.error("Error fetching user stats:", error);
    return { success: false, error: error.message };
  }
};
