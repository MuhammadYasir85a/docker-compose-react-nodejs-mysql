# 🚨 Emergency Rollback Procedure

## When to Use This

Use this guide if the SQL Server driver fix causes any of these issues:
- Backend container won't start
- App Service shows "Application Error" page
- Pipeline keeps failing
- Frontend can't reach backend anymore
- Database connection errors persist after fix

---

## 🎯 Recovery Method 1: Docker Image Rollback (FASTEST — 2 minutes)

**Use when:** Backend is deployed but broken

### Steps:

1. Open [Azure Portal](https://portal.azure.com)
2. Search → **App Services** → click `app-teksel-backend-dev-sea-01`
3. Left menu → **Deployment Center**
4. Look at current **Image** and **Tag** fields
5. Change the **Tag** field to: `19`
6. Click **Save** (top of page)
7. Wait 2 minutes for restart
8. Verify: Visit `https://app-teksel-backend-dev-sea-01.azurewebsites.net`
9. Expected: `{"message":"Welcome to bezkoder application."}`

---

## 🎯 Recovery Method 2: Git Branch Reset (CLEAN — 5 minutes)

**Use when:** Code on develop/master is broken and you want to restore working code

### Steps:

```bash
# Switch to backup branch
git checkout backup/working-state-before-sql-fix

# Force the develop branch back to this state
git branch -f develop backup/working-state-before-sql-fix

# Push develop (triggers pipeline with old, working code)
git push -f origin develop
git push -f azure develop

# Wait 5-7 minutes for pipeline to deploy old version