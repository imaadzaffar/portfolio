module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'db8ea11bd6cc3dba122efe05ff68cdf0'),
  },
})
