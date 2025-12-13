# Appwrite Database Setup Instructions

## Step 1: Create Database
1. Go to your Appwrite Console
2. Navigate to "Databases"
3. Click "Create Database"
4. Name it "OptKeyBoost" (or your preferred name)
5. Copy the Database ID and add it to your `.env` file as `VITE_APPWRITE_DATABASE_ID`

## Step 2: Create Collection
1. Inside your database, click "Create Collection"
2. Name it "typing_tests"
3. Copy the Collection ID and add it to your `.env` file as `VITE_APPWRITE_TYPING_TESTS_COLLECTION_ID`

## Step 3: Add Attributes to the Collection
Add the following attributes to your `typing_tests` collection:

| Attribute Name   | Type     | Size | Required | Array |
|-----------------|----------|------|----------|-------|
| userId          | String   | 255  | Yes      | No    |
| wpm             | Integer  | -    | Yes      | No    |
| accuracy        | Integer  | -    | Yes      | No    |
| errors          | Integer  | -    | Yes      | No    |
| duration        | Integer  | -    | Yes      | No    |
| totalCharacters | Integer  | -    | Yes      | No    |
| timestamp       | String   | 255  | Yes      | No    |

## Step 4: Set Collection Permissions
1. Go to the "Settings" tab of your collection
2. Under "Permissions", add:
   - **Create**: Role: Users (any authenticated user can create)
   - **Read**: Role: Users (any authenticated user can read)
   - **Update**: Role: Users (owner can update their documents)
   - **Delete**: Role: Users (owner can delete their documents)

Or use Document Security with these rules:
- Create: `users`
- Read: `user:[USER_ID]` (replace with actual user ID pattern)
- Update: `user:[USER_ID]`
- Delete: `user:[USER_ID]`

## Step 5: Create Indexes (Optional but Recommended)
1. Go to the "Indexes" tab
2. Create an index:
   - **Key**: `userId_timestamp`
   - **Type**: Key
   - **Attributes**: `userId` (ASC), `timestamp` (DESC)

This will optimize queries for fetching user test results.

## Step 6: Update Your .env File
Copy `.env.example` to `.env` and fill in all the values:

```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_actual_project_id
VITE_APPWRITE_DATABASE_ID=your_actual_database_id
VITE_APPWRITE_TYPING_TESTS_COLLECTION_ID=your_actual_collection_id
```

## Done!
Your Appwrite database is now set up and ready to store typing test results.
