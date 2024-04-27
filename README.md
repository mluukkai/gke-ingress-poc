## GKE ingress and pod health checks

See 
- https://stackoverflow.com/questions/70670084/configuring-the-health-check-of-a-kubernetes-ingress-with-terraform
- https://cloud.google.com/kubernetes-engine/docs/concepts/ingress#interpreted_hc

You need to do it like this https://github.com/mluukkai/gke-ingress-poc/blob/main/manifests/service.yaml