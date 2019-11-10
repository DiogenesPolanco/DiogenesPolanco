[![Netlify Status](https://api.netlify.com/api/v1/badges/bdc644ff-73cc-4009-8a79-fb9f94265267/deploy-status)](https://app.netlify.com/sites/diogenespolanco/deploys)

# Running Your Site Locally

1. [Install Hugo](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo)

1. get "stackbit-api-key" from project menu in [Stackbit dashboard](https://app.stackbit.com/dashboard)

1. run the following command to assign this key to `STACKBIT_API_KEY` environment variable:

        export STACKBIT_API_KEY={stackbit_netlify_api_key}

1. run the following command to fetch additional site contents from Stackbit if needed:

        npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5dc788805dfeba0019eff500

1. Build the site and start the Hugo server with drafts enabled

        hugo server -D

1. Browse to [http://localhost:1313/](http://localhost:1313/)
