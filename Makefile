.PHONY
charts:
    cd chart && helm package chart/
    mv chart/*.tgz docs/
    helm repo index docs --url https://nickdcn.github.io/test-repo/ --merge ./docs/index.yaml
